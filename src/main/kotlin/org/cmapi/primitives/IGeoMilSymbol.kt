package org.cmapi.primitives


interface IGeoMilSymbol : IGeoRenderable
{
    var symbolStandard: SymbolStandard

    var symbolCode: String

    var modifiers: HashMap<Modifier, String>

    enum class Modifier private constructor(private val value: String)
    {
        SYMBOL_ICON("A"),
        ECHELON("B"),
        QUANTITY("C"),
        TASK_FORCE_INDICATOR("D"),
        FRAME_SHAPE_MODIFIER("E"),
        REDUCED_OR_REINFORCED("F"),
        STAFF_COMMENTS("G"),
        ADDITIONAL_INFO_1("H"),
        ADDITIONAL_INFO_2("H1"),
        ADDITIONAL_INFO_3("H2"),
        EVALUATION_RATING("J"),
        COMBAT_EFFECTIVENESS("K"),
        SIGNATURE_EQUIPMENT("L"),
        HIGHER_FORMATION("M"),
        HOSTILE("N"),
        IFF_SIF("P"),
        DIRECTION_OF_MOVEMENT("Q"),
        MOBILITY_INDICATOR("R"),
        SIGINT_MOBILITY_INDICATOR("R2"),
        OFFSET_INDICATOR("S"),
        UNIQUE_DESIGNATOR_1("T"),
        UNIQUE_DESIGNATOR_2("T1"),
        EQUIPMENT_TYPE("V"),
        DATE_TIME_GROUP("W"),
        DATE_TIME_GROUP_2("W1"),
        ALTITUDE_DEPTH("X"),
        LOCATION("Y"),
        SPEED("Z"),
        SPECIAL_C2_HEADQUARTERS("AA"),
        FEINT_DUMMY_INDICATOR("AB"),
        INSTALLATION("AC"),
        PLATFORM_TYPE("AD"),
        EQUIPMENT_TEARDOWN_TIME("AE"),
        COMMON_IDENTIFIER("AF"),
        AUXILIARY_EQUIPMENT_INDICATOR("AG"),
        AREA_OF_UNCERTAINTY("AH"),
        DEAD_RECKONING("AI"),
        SPEED_LEADER("AJ"),
        PAIRING_LINE("AK"),
        OPERATIONAL_CONDITION("AL"),
        DISTANCE("AM"),
        AZIMUTH("AN"),
        ENGAGEMENT_BAR("AO"),
        COUNTRY_CODE("CC"),
        SONAR_CLASSIFICATION_CONFIDENCE("SCC");

        fun valueOf(): String
        {
            return this.value
        }
    }

    enum class SymbolStandard private constructor()
    {
        MIL_STD_2525C,
        MIL_STD_2525B
    }
}
