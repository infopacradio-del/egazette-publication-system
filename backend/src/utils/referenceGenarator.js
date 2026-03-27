/**
 * Generates a notice reference number
 *
 * Format:
 * N-YYYYMMDD-NOTICECODE-SEQUENCE
 *
 * Example:
 * N-20260327-10193-1
 */

function generateNoticeReference({
  publicationDate,
  noticeCode,
  sequenceNumber
}) {
  if (!publicationDate || !noticeCode || !sequenceNumber) {
    throw new Error('Missing required fields to generate notice reference');
  }

  const date = new Date(publicationDate);
  const formattedDate = date
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, '');

  return `N-${formattedDate}-${noticeCode}-${sequenceNumber}`;
}

module.exports = {
  generateNoticeReference
};
