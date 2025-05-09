import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://jsjrliizycqoklozxtzc.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzanJsaWl6eWNxb2tsb3p4dHpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2NzkyNjEsImV4cCI6MjA2MjI1NTI2MX0.SNDFZ1t2IZgX1_XBvMUxVw7UAObOg4o4PHP_vYaBubU"
)