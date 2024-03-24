const numberSort = (a, b) => {
  const numberA = a.width || 999
  const numberB = b.width || 999

  return numberB - numberA
}

export const Picture = props => {
  if (props.globals?.imageSizes) {

    // Assume rendering with green-build when imageSizes is present
    const assetUrl = (props.globals?.baseUrl || '') + (props.globals?.assetUrl || '')
    const imageBasePath = assetUrl + props.src.slice(0, -4)

    const sizesArray = Object
      .keys(props.globals.imageSizes)
      .map(name => ({
        name,
        width: props.globals.imageSizes[name],
      }))
      .sort(numberSort)

    const lowestWidth = sizesArray.pop()

    return (
      <picture className={props.className}>
        {/* Create a source for each image with a higher width than the img.src */}
        {sizesArray.map(size => (
          <source
            srcset={`${imageBasePath}-${size.name}.webp`}
            media={`(min-width: ${size.width}px)`}
            type="image/webp"
          />
        ))}
        {/* Use the lowest resolution image as default */}
        <img
          src={`${imageBasePath}-${lowestWidth.name}.webp`}
          alt={props.alt || 'Image without description'}
        />
      </picture>
    )
  }

  // Return plain image for processing image elsewhere
  return (
    <picture className={props.className}>
      <img
        src={props.src}
        alt={props.alt || 'Image without description'}
      />
    </picture>
  )

}
