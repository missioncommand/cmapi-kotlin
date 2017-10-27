package org.cmapi.primitives.interfaces

interface IGeoFillStyle
{
    var description : String
    var fillColor: IGeoColor
    var fillPattern: IGeoFillStyle.FillPattern

    enum class FillPattern private constructor()
    {
        solid,
        hatched,
        crossHatched
    }
}
