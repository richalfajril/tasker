create table tasks (
    id uuid primary key default gen_random_uuid(),
    title text not null,
    description text,
    category text check (
        category in ('bugs','adjust','findings')
    ),
    status text default 'ongoing' check (
        status in ('ongoing','done')
    ),
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);
