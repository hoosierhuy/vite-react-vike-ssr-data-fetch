export { TaylorSwift }

// Library import
import { useState } from 'react'

// Posting data to an API
function TaylorSwift() {
  // Slice of state to hold the JSON response from the API
  const [json, setJson] = useState(null)

  return (
    <>
      <button
        type="button"
        data-tooltip="Click to post data to an API.  You can also inspect the network tab in the browser's developer tools to see the POST request."
        className="submit-btn"
        onClick={() => postSingleRecordToApi(setJson)}
      >
        Unveil The Princess of Darkness
      </button>
      {json && (
        <pre>
          <code>{JSON.stringify(json, null, 2)}</code>
        </pre>
      )}
    </>
  )
}

// Client-side function to post data to an API
async function postSingleRecordToApi(callBack) {
  try {
    // This is a free API that allows us to POST data to their endpoint.
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        title: 'Who is the Princess of Darkness?',
        body: 'Could it be Taylor Swift?',
        userId: 1,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    if (response.status === 201) {
      console.info('Data posted successfully! ', response)
    }

    callBack(data)
  } catch (error) {
    console.error('Error:', error)
  }
}
