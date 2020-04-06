const isRight = (rights, currentRights) => rights.some(right => currentRights.includes(right))

export default isRight