package org.cmapi.primitives

interface IGeoFillStyle
{
    var description : String
    var fillColor: IGeoColor
    var fillPattern: FillPattern

    enum class FillPattern
    {
        solid,
        hatched,
        crossHatched
    }
}
