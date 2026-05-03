const CONFIG = {
  SHEET_ID: '1_jON5Gh7emjc-gWOZCWJHBR060RG7F-jAEFfazXUUCI',
  SHEET_NAME: 'Contact Inquiries',
  RECAPTCHA_SECRET: 'PASTE_RECAPTCHA_SECRET_KEY_HERE',
  MIN_RECAPTCHA_SCORE: 0.5,
  REQUIRE_RECAPTCHA: true
};

function doPost(e) {
  try {
    const params = e && e.parameter ? e.parameter : {};

    if (params.company) {
      return jsonResponse({ ok: true });
    }

    const required = ['name', 'email', 'phone', 'message'];
    const missing = required.filter(function(field) {
      return !String(params[field] || '').trim();
    });

    if (missing.length) {
      return jsonResponse({ ok: false, error: 'Missing required fields.' }, 400);
    }

    if (!isValidEmail(params.email)) {
      return jsonResponse({ ok: false, error: 'Invalid email address.' }, 400);
    }

    if (!isValidPhone(params.phone)) {
      return jsonResponse({ ok: false, error: 'Invalid phone number.' }, 400);
    }

    if (CONFIG.REQUIRE_RECAPTCHA) {
      const verification = verifyRecaptcha(params.recaptchaToken);
      if (!verification.ok) {
        return jsonResponse({ ok: false, error: verification.error }, 403);
      }
    }

    const sheet = getSheet();
    sheet.appendRow([
      new Date(),
      sanitize(params.name),
      sanitize(params.email),
      sanitize(params.phone),
      sanitize(params.subject),
      sanitize(params.message),
      sanitize(params.page),
      sanitize(params.submittedAt),
      sanitize(params.recaptchaToken)
    ]);

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({ ok: false, error: error.message || 'Server error.' }, 500);
  }
}

function getSheet() {
  const spreadsheet = SpreadsheetApp.openById(CONFIG.SHEET_ID);
  let sheet = spreadsheet.getSheetByName(CONFIG.SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(CONFIG.SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Received At',
      'Name',
      'Email',
      'Phone',
      'Subject',
      'Message',
      'Page',
      'Submitted At',
      'reCAPTCHA Token'
    ]);
  }

  return sheet;
}

function verifyRecaptcha(token) {
  if (!token) {
    return { ok: false, error: 'Verification token missing.' };
  }

  const response = UrlFetchApp.fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'post',
    payload: {
      secret: CONFIG.RECAPTCHA_SECRET,
      response: token
    },
    muteHttpExceptions: true
  });

  const result = JSON.parse(response.getContentText() || '{}');
  const score = typeof result.score === 'number' ? result.score : 0;

  if (!result.success) {
    return { ok: false, error: 'Verification failed.' };
  }

  if (result.action && result.action !== 'contact') {
    return { ok: false, error: 'Verification action mismatch.' };
  }

  if (score < CONFIG.MIN_RECAPTCHA_SCORE) {
    return { ok: false, error: 'Verification score too low.' };
  }

  return { ok: true };
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim());
}

function isValidPhone(value) {
  const phone = String(value || '').trim();
  const digits = phone.replace(/\D/g, '');
  return /^[0-9+()\-\s]{7,20}$/.test(phone) && digits.length >= 7 && digits.length <= 15;
}

function sanitize(value) {
  return String(value || '').trim();
}

function jsonResponse(payload, statusCode) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
