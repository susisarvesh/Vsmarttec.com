import GoogleMapEmbed from './GoogleMapEmbed'

function Location() {
  return (
      <div>
          <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white w-full p-6 rounded-lg">
        {/* Content for the second section */}
        <div className="">
          <GoogleMapEmbed></GoogleMapEmbed>
        </div>
      </div>
    </div>
  )
}

export default Location