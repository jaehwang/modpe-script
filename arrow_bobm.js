// function useItem(x,y,z,itemId,blockId) {
//     clientMessage("[AB] item: "+itemId+" block: "+blockId);
//     clientMessage("[AB] at x: "+x+" y: "+y+" z: "+z);
// 
//     if (itemId == 262) { // arrow
//         Level.explode(x,y,z,3);
//     }
// }

function attackHook(attacker, victim) 
{
    var ourItem = getCarriedItem();

    clientMessage("[AB] item: "+ourItem);

    if (ourItem == 262) {
        explode(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),3);
    }
}
