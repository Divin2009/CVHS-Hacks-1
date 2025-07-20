const APP_ID = process.env.ADZUNA_APP_ID;
const APP_KEY = process.env.ADZUNA_APP_KEY;

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const what = searchParams.get('what')
  const where = searchParams.get('where') || ''
  const COUNTRY_CODE = searchParams.get('country') || 'us';
  

  const params = new URLSearchParams({
    app_id: APP_ID,
    app_key: APP_KEY,
    results_per_page: 50,
    what,
    where,
    'content-type': 'application/json'
  });

  const endpoint = `https://api.adzuna.com/v1/api/jobs/${COUNTRY_CODE}/search/1?${params.toString()}`;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch jobs' }), { status: 500 });
    }

    const data = await response.json();

    const seen = new Set();
    const uniqueJobs = [];

    for (const job of data.results) {
      const key = `${job.title}-${job.company.display_name}-${job.location.display_name}`;
      if (!seen.has(key)) {
        seen.add(key);
        uniqueJobs.push({
          title: job.title,
          company: job.company.display_name,
          location: job.location.display_name,
          description: job.description.substring(0, 100),
          url: job.redirect_url,
          salaryMin: job.salary_min,
          salaryMax: job.salary_max,
          category: job.category.label,
          contract_time: job.contract_time || '',
        });
      }
    }
    
    return new Response(JSON.stringify(uniqueJobs), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
