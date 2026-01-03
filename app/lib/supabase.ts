import {createClient} from "@supabase/supabase-js"



const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseApiKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const supabase  = createClient(supabaseUrl,supabaseApiKey)