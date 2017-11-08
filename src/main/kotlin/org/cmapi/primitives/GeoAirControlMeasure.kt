package org.cmapi.primitives

import org.cmapi.primitives.IGeoAirControlMeasure.Attribute;

open class GeoAirControlMeasure : GeoRenderable(), IGeoAirControlMeasure
{
    override var acmType: IGeoAirControlMeasure.AcmType? = null
    override var attributes: HashMap<Attribute, String> = HashMap()
}