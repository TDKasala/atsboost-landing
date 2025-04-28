export default function Results() {
    return (
      <main className="max-w-xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Your ATS Report</h1>
        <div className="mb-4 bg-blue-50 border p-4 rounded">
          <p><b>ATS Score:</b> 78/100</p>
          <p><b>Strengths:</b> Good keyword match, proper formatting</p>
          <p><b>Improvements:</b> Add more leadership skills, include a Summary section.</p>
          <p className="mt-2 text-blue-600">*AI Feedback Example*</p>
        </div>
        <button className="py-2 px-4 rounded bg-blue-500 text-white font-bold">Download Report (Coming Soon)</button>
      </main>
    );
  }