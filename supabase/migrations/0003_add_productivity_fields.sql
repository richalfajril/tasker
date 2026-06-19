ALTER TABLE tasks
ADD COLUMN priority text CHECK (priority IN ('low', 'medium', 'high')) DEFAULT 'medium',
ADD COLUMN labels text[] DEFAULT '{}',
ADD COLUMN due_date timestamptz;
