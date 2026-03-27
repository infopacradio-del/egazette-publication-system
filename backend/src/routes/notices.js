const express = require('express');
const router = express.Router();

const { generateNoticeReference } = require('../utils/referenceGenerator');
const supabase = require('../config/supabaseClient');

// POST /notices
router.post('/', async (req, res) => {
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

  // Get existing notices for the same date & notice type
  const { data: existingNotices, error: countError } = await supabase
    .from('notices')
    .select('id')
    .eq('publication_date', publicationDate)
    .eq('notice_code', noticeCode);

  if (countError) {
    return res.status(500).json({
      error: 'Failed to determine notice sequence',
      details: countError.message
    });
  }

  const sequenceNumber = existingNotices.length + 1;

  const referenceNumber = generateNoticeReference({
    publicationDate,
    noticeCode,
    sequenceNumber
  });

  // Insert notice into database
  const { data, error } = await supabase
    .from('notices')
    .insert([
      {
        reference_number: referenceNumber,
        notice_type: noticeType,
        notice_code: noticeCode,
        province,
        customer_id: customerId,
        publication_date: publicationDate,
        status: 'submitted'
      }
    ])
    .select()
    .single();

  if (error) {
    return res.status(500).json({
      error: 'Failed to save notice',
      details: error.message
    });
  }

  return res.status(201).json({
    message: 'Notice created successfully',
    notice: data
  });
});

module.exports = router;
``
