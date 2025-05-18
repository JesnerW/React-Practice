export const PokemonCard = ({ id, name, sprites = [] }) => {
  return (
    <section style={{ height: 200 }}>
      <h2 className="text-capitalize">#{id} - {name}</h2>
      
      <div>
        <img src={sprites.other.dream_world.front_default} alt={name} />
      </div>
    </section>
  )
}
