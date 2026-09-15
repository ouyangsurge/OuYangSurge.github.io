---
title: Metal Oxide Varistor Selection Guide
description: A practical MOV selection guide for continuous voltage, varistor voltage, clamping level, surge duty, package size and validation boundaries.
permalink: /mov-selection-guide/
conversion_source: mov-selection-guide
conversion_application: mov-selection
---
## Answer first

Select a metal oxide varistor (MOV) from the **actual protection path**, not from one catalogue value. Define continuous AC/DC voltage, the protected circuit’s tolerance, expected transient waveform, clamping requirement, surge duty, environment and failure handling. A disc diameter, varistor voltage or energy value only has meaning with the supplier’s stated method and conditions.

{% include conversion-comparison.html source="mov-selection-guide" application="mov-selection" %}

## What an MOV is doing

An MOV is a nonlinear voltage-dependent component used to limit a transient voltage by conducting surge current. The protected circuit, source impedance, lead layout and coordinated protective devices determine the installed result. The final topology belongs to the system designer.

| Selection input | Why it matters | Do not assume |
| --- | --- | --- |
| Continuous operating voltage | Must stay within the selected device’s stated capability | Nominal line voltage alone defines the condition |
| Varistor voltage | Sets part of the V-I behavior | Two values from different test currents are interchangeable |
| Clamping voltage | Must suit the protected circuit under stated surge current | A catalogue clamp is the system-level protection voltage |
| Surge current and waveform | Determines relevant pulse duty | Different waveform ratings can be compared directly |
| Energy and repetition | Helps define duty with stated pulse conditions | A single-pulse value proves lifetime |
| Diameter, leads and layout | Affect pulse handling, parasitics and assembly | Larger always means qualified |

{% include conversion-sample.html source="mov-selection-guide" application="mov-selection" %}

## Selection sequence

<ol class="flow"><li>Define circuit</li><li>Define exposure</li><li>Set protection level</li><li>Screen datasheets</li><li>Test representative hardware</li><li>Review failure handling</li></ol>

### Failure modes to plan for

MOV behavior can change after surge exposure, temperature and sustained electrical stress. The assembly needs a defined response to an overheated, degraded or disconnected protection element. Thermal protection, fusing, enclosure behavior, clearance and service requirements are system decisions, not generic claims for any one MOV.

<aside class="notice"><strong>Engineering limit.</strong> Do not treat a marking such as “471K” or a disc size as proof of equivalence. Confirm the supplier’s complete part number, tolerance, continuous voltage, clamp test condition, surge waveform, construction and qualification evidence.</aside>

## Practical bench plan

Record the exact part identity, lot, board layout, wiring, source impedance, waveform, number of pulses, interval, ambient condition and pass/fail criterion. Measure the protected-node response using appropriate probes and review the component and surrounding assembly after exposure. The application owner must set acceptance limits.

## FAQ

### Is the highest surge-current rating automatically best?

No. The rating must relate to the expected waveform, repetition, clamp requirement, operating voltage, layout and failure handling.

### Can two MOV datasheets be compared directly?

Only after aligning the test current, waveform, temperature, tolerance and stated limits. Otherwise use them for screening and run a controlled comparison.

### What should be shared for a sample request?

Share the existing part or datasheet, circuit location, continuous voltage, transient concern, package constraints and the first result you need to validate.

## Related pages

- [TMOV / thermally protected MOV]({{ '/tmov-thermally-protected-mov/' | relative_url }})
- [MOV second-source qualification]({{ '/mov-second-source-qualification/' | relative_url }})
- [MOV for solar inverter]({{ '/applications/mov-for-solar-inverter/' | relative_url }})

## Sources

- [TDK SIOV selection procedure](https://www.tdk-electronics.tdk.com/download/185710/705a180727925b6c726f5f6b76d6c1fb/siov-selection.pdf)
- [Bourns: designing surge protection for AC and DC systems](https://www.bourns.com/docs/technical-documents/technical-library/isomov/application-notes/Surge_Protection_for_AC_and_DC_Powered_Systems_appnote.pdf)

<script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Is the highest surge-current rating automatically best?","acceptedAnswer":{"@type":"Answer","text":"No. The rating must relate to waveform, repetition, clamp requirement, operating voltage, layout and failure handling."}},{"@type":"Question","name":"Can two MOV datasheets be compared directly?","acceptedAnswer":{"@type":"Answer","text":"Only after aligning test current, waveform, temperature, tolerance and stated limits. Otherwise use them for screening and run a controlled comparison."}},{"@type":"Question","name":"What should be shared for a sample request?","acceptedAnswer":{"@type":"Answer","text":"Share the existing part or datasheet, circuit location, continuous voltage, transient concern, package constraints and the first result to validate."}}]}</script>

