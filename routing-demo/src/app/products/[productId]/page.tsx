export default function SpecificProduct({ params, }: 
  {
  params:{productId: string}
}) {
  return (
    <div>
      <h1>Specific Product:       {params.productId}</h1>

    </div>
  )
}