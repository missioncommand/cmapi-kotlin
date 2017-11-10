package org.cmapi.primitives

open class GeoMilSymbol : GeoRenderable(), IGeoMilSymbol
{
    override var symbolStandard: IGeoMilSymbol.SymbolStandard? = null
    override var symbolCode: String? = null
    override var modifiers: HashMap<IGeoMilSymbol.Modifier, String>? = null

    init
    {
        this.symbolStandard = IGeoMilSymbol.SymbolStandard.MIL_STD_2525C
        this.symbolCode = "SUGP-----------"
        this.modifiers = HashMap()
    }
}
