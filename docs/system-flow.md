# System Flow – Gazette Publication Management System

## 1. User Types

### 1.1 Cash Clients
- Pay per notice
- Use fixed-price forms
- Payment via card or direct bank deposit
- Require invoice and payment confirmation before publishing

### 1.2 Account Clients
- Prepaid account clients
- Government departments (Purchase Order based)
- Notices can only be published if sufficient balance is available

---

## 2. Notice Submission Flow

1. Customer selects a notice type (e.g. J193)
2. System displays:
   - Notice description (first page)
   - Fixed price
3. Customer completes the notice form
4. System generates:
   - Invoice
   - Notice reference number
5. Payment is processed
6. Notice enters internal workflow

---

## 3. Payment Flow

### 3.1 Card Payments
- Payment confirmed instantly
- Invoice marked as paid
- Notice proceeds to Verification

### 3.2 Direct Deposit
- Customer uploads Proof of Payment (POP)
- POP must contain the invoice reference number
- System validates that the reference number:
  - Exists
  - Has not been used before
- Duplicate POP reference numbers are rejected
- Finance verifies payment before notice proceeds

---

## 4. Notice Tracking Reference Number

Each notice receives a unique tracking number in the format:

N-YYYYMMDD-NOTICECODE-SEQUENCE

Example:
N-20260327-10193-1

This reference number is used throughout the system for:
- Customer tracking
- Internal workflow
- Finance validation
- Gazette publication

---

## 5. Internal Workflow Departments

### 5.1 Verification
- Verify all required fields are populated
- Confirm submitted data matches proof output
- Approve or reject with comments

### 5.2 Proofreading
- Confirm text matches submitted form
- Verify correct template is used

### 5.3 DTP
- Ensure formatting is correct
- Compile approved notices into consolidated gazette
- Group notices by province

### 5.4 Finance
- Upload weekly bank statements
- Reconcile payments against invoices
- Confirm POPs and account balances

---

## 6. Gazette Publication

- Notices are published under their respective notice types
- Each notice type has:
  - One description page
  - Multiple notices listed per province
- Published gazettes remain permanently accessible
