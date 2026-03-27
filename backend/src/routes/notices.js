const express = require('express');
const router = express.Router();

const { generateNoticeReference } = require('../utils/referenceGenerator');

// Temporary in-memory store (mock database)
const notices = [];

// POST /notices
router.post('/', (req, res) => {
  const {
    noticeType,
    noticeCode,
    province,
    customerId,
    publicationDate
  } = req.body;

  if (!noticeType || !noticeCode || !province || !customerId || !publicationDate) {
    return res.status(400).json({
      error: 'Missing required notice fields'
    });
  }

  // Simulated sequence number logic
  const sameDayNotices = notices.filter(
    n => n.publicationDate === publicationDate && n.noticeCode === noticeCode
  );

  const sequenceNumber = sameDayNotices.length + 1;

  const referenceNumber = generateNoticeReference({
    publicationDate,
    noticeCode,
    sequenceNumber
  });

  const notice = {
    id: notices.length + 1,
    referenceNumber,
    noticeType,
    noticeCode,
    province,
    customerId,
    publicationDate,
    status: 'submitted',
    createdAt: new Date().toISOString()
  };

  notices.push(notice);

  return res.status(201).json({
    message: 'Notice created successfully',
    notice
  });
});

module.exports = router;
