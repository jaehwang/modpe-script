var bombX = 0, bombY = 0, bombZ = 0;
var bombSet = 0;
var tick = 0;

function useItem(x,y,z,itemId,blockId)
{
    if (itemId == 266) { // Gold Bar
        bombX = x;
        bombY = y;
        bombZ = z;
        bombSet = 1;
    }
}

function modTick()
{
    var term = 5;

    if (bombSet == 1) {
        if ((tick % 20) == 0) {
            var left = term - tick/20;
            clientMessage("Timer Bomb Count Down: "+ left);
        }

        tick = tick + 1;

        if (tick >= 20*term) {
            Level.explode(bombX,bombY,bombZ,20);
            tick = 0;
            bombSet = 0;
        }
    }
}
