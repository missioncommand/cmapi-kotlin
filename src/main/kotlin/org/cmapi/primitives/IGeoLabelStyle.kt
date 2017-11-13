package org.cmapi.primitives

interface IGeoLabelStyle
{
    var size: Double

    var color: IGeoColor

    var outlineColor: IGeoColor

    var justification: Justification

    var fontFamily: String

    var typeface: Typeface

    enum class Typeface
    {
        REGULAR,
        BOLD,
        ITALIC,
        BOLDITALIC
    }

    enum class Justification
    {
        LEFT,
        CENTER,
        RIGHT
    }
}
