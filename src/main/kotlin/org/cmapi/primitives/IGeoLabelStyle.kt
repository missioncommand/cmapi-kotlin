package org.cmapi.primitives

interface IGeoLabelStyle {

    var size: Double

    var color: IGeoColor

    var outlineColor: IGeoColor

    var justification: Justification?

    var fontFamily: String?

    var typeface: Typeface?

    enum class Typeface private constructor() {
        REGULAR,
        BOLD,
        ITALIC,
        BOLDITALIC
    }

    enum class Justification private constructor() {
        LEFT,
        CENTER,
        RIGHT
    }
}
