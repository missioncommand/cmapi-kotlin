package org.cmapi.primitives.interfaces

interface IGeoLabelStyle {

    var size: Double

    var color: IGeoColor

    var outlineColor: IGeoColor

    var justification: IGeoLabelStyle.Justification

    var fontFamily: String

    var typeface: IGeoLabelStyle.Typeface

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
