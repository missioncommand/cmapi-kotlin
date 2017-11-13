package org.cmapi.primitives

open class GeoMilSymbol : GeoRenderable(), IGeoMilSymbol
{
    override var symbolStandard: IGeoMilSymbol.SymbolStandard = IGeoMilSymbol.SymbolStandard.MIL_STD_2525C
    override var symbolCode: String = ""
    override var modifiers: HashMap<IGeoMilSymbol.Modifier, String> = hashMapOf()

    init
    {
        this.symbolStandard = IGeoMilSymbol.SymbolStandard.MIL_STD_2525C
        this.symbolCode = "SUGP-----------"
        this.modifiers = HashMap()
    }
}
