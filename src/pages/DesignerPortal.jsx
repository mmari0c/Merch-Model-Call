import StageStatus from '../components/StageStatus.jsx'

function DesignerPortal() {
  return (
    <section className="portal designer-portal flex flex-col items-center justify-center w-4/5 max-w-6xl mx-auto gap-6">
      <div className='w-full p-6'>
        <StageStatus
          label="Current Stage"
          status="selection"
          description="Designers are selecting models"
          role="designer"
        />
      </div>

      <div className='w-full bg-violet-50 p-6 rounded-xl border-2 border-gray-200 text-sm'>
        <p>Selection Instructions</p>
        <ol className='list-decimal space-y-4 m-5'>
          <li>
            <p><strong>Review and Star: </strong>Review all available models and click the star button to add models you're interested in to your shortlist. Hover over photos and click "View Profile" to see complete model information and photo carousel.</p>
          </li>
          <li>
            <p><strong>Wait for Your Turn: </strong>Once it's your turn in the selection process, you can add models from your Starlist to your final selection.</p>
          </li>
          <li>
            <p><strong>Finalize & Submit: </strong>Choose your final model selections and click "Submit Final Selection" to confirm your choices.</p>
          </li>
        </ol>
      </div>
    </section>
  )
}

export default DesignerPortal
