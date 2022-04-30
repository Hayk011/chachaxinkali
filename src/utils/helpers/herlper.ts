export const sliderController = (screenWidth: number): number =>
{
    let nextPosition: number = 550;
    if (screenWidth <= 800)
    {
        nextPosition = 300;
    }
    else if (screenWidth <= 972)
    {
        nextPosition = 350
    }
    else if (screenWidth <= 1210)
    {
        nextPosition = 450;
    }
    return nextPosition
}