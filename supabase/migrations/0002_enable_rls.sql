alter table "public"."tasks" enable row level security;

create policy "Enable full access for all users"
on "public"."tasks"
as permissive
for all
to public
using (
  true
)
with check (
  true
);
