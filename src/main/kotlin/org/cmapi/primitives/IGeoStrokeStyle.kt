package org.cmapi.primitives

interface IGeoStrokeStyle {

    var strokeColor: IGeoColor

    var stipplingPattern: Short

    var stipplingFactor: Int

    var strokeWidth: Double
}
