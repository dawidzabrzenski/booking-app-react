import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://woyryyxlqfwobzjgacde.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndveXJ5eXhscWZ3b2J6amdhY2RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUzNDg3NTQsImV4cCI6MjA0MDkyNDc1NH0.V7C9l2ma8MO3J5el4anTKAmM0L_Iuk1AYzHmnoUYp9Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
