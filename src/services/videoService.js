import { createClient } from '@supabase/supabase-js';

const PROJECT_URL = 'https://ljnuyizynkoifpfpjarj.supabase.co'
const PUBLIC_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxqbnV5aXp5bmtvaWZwZnBqYXJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjg1NTMsImV4cCI6MTk4Mzc0NDU1M30.J84KQwQPGree0SQeiNGiMPosUPGlrOf5mKljnDcgl2o'
export const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from('video').select("*")
        }
    }
}