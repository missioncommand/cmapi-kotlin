package org.cmapi.primitives

import multiplatform.expected.MpDate
import org.cmapi.primitives.interfaces.IGeoMilSymbol

class GeoMilSymbol : GeoRenderable(), IGeoMilSymbol {
    override var timeStamp: MpDate = MpDate()
    override var symbolStandard: IGeoMilSymbol.SymbolStandard = IGeoMilSymbol.SymbolStandard.MIL_STD_2525C
    override var symbolCode: String = ""
    override var modifiers: HashMap<IGeoMilSymbol.Modifier, String> = HashMap()

    init {
        this.symbolStandard = IGeoMilSymbol.SymbolStandard.MIL_STD_2525C
        this.symbolCode = "SUGP-----------"
        this.modifiers = HashMap()
    }
}
