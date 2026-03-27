# Database Design – Gazette Publication Management System

## 1. Design Principles

- All customer and notice data is retained permanently
- Notices are traceable from submission to publication
- Payment references and POPs cannot be reused
- Workflow stages are auditable and role-based
- Data integrity is enforced at database level where possible

---

## 2. Customers Table

Stores all customer information.

### Fields
- id (UUID / auto-increment)
- name
- email
- phone
- customer_type (cash | prepaid | government)
- balance (decimal, nullable for cash clients)
- created_at
- updated_at

---

## 3. Notices Table

Stores each notice submitted to the system.

### Fields
- id
- reference_number (unique)
- notice_type (e.g. J193)
- province
- customer_id (FK → customers.id)
- status (submitted | verification | proofreading | dtp | published | rejected)
- publication_date
- created_at

---

## 4. Notice Workflow Table

Tracks departmental progress per notice.

### Fields
- id
- notice_id (FK → notices.id)
- verification_status (pending | approved | rejected)
- verification_comment
- proofreading_status (pending | approved | rejected)
- proofreading_comment
- dtp_status (pending | approved)
- finance_status (pending | paid | rejected)
- updated_at

---

## 5. Invoices Table

Generated per notice.

### Fields
- id
- invoice_number (unique)
- notice_id (FK → notices.id)
- customer_id (FK → customers.id)
- amount
- issued_date
- paid (boolean)

---

## 6. Payments Table

Tracks all payments and POP uploads.

### Fields
- id
- invoice_id (FK → invoices.id)
- reference_number (unique)
- amount
- payment_method (card | bank_deposit)
- pop_file_path
- verified (boolean)
- verified_at
- created_at

---

## 7. Account Transactions Table

Tracks debits and credits for account clients.

### Fields
- id
- customer_id (FK → customers.id)
- type (credit | debit)
- amount
- description
- reference
- created_at

---

## 8. Notice Types Table

Defines available notice forms and templates.

### Fields
- id
- notice_code (e.g. J193)
- description
- template_path
- price
- active (boolean)

---

## 9. Provinces Table

Used for grouping notices in gazettes.

### Fields
- id
- name
