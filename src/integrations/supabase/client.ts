// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ewpsmfypihurkblejnvu.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3cHNtZnlwaWh1cmtibGVqbnZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3MDEwNDMsImV4cCI6MjA1MTI3NzA0M30.GHI7-tFymp6iXMXDg5vy1nK4SDqOEYfJiwTqi_vNpSY";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);