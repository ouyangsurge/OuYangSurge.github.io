---
title: MOV Second Source Qualification
description: A practical MOV second-source qualification flow from existing-part definition through datasheet comparison, testing, pilot review and RFQ readiness.
permalink: /mov-second-source-qualification/
conversion_source: mov-second-source-qualification
conversion_application: second-source
---
## Answer first

An MOV second source is not qualified because its disc diameter, marking or headline surge value looks similar. Freeze the existing component’s electrical function, operating conditions, protection level, test method, failure-handling path and acceptance criteria; then compare a candidate in representative hardware. Qualification is evidence from screening through pilot control—not a closest-looking datasheet.

{% include conversion-comparison.html source="mov-second-source-qualification" application="second-source" %}

## Qualification flow

<ol class="flow"><li>Existing MOV</li><li>Candidate screening</li><li>Datasheet comparison</li><li>Bench test</li><li>Surge &amp; thermal review</li><li>Pilot</li><li>Qualification</li><li>RFQ</li></ol>

## Evidence gates

| Gate | What to compare | Evidence to retain |
| --- | --- | --- |
| Existing component definition | Full part number, tolerance, supplier TDS, circuit location, continuous voltage, known field constraints | Approved reference and application information |
| Candidate screening | Varistor-voltage test point, continuous AC/DC limits, clamp condition, surge waveform, energy condition, package and approvals where required | Normalized TDS comparison; unknowns marked open |
| Bench test | Protected-node response and component behavior under a stated fixture and waveform | Part identity, layout, probes, source impedance, waveform, pulses, ambient and criteria |
| Surge and thermal review | Electrical response, temperature, visible damage, disconnect/failure behavior where relevant | Pre/post inspection and defined post-test condition |
| Pilot and supply control | Lot traceability, incoming checks, marking, packaging, change notification and sample-to-pilot consistency | Pilot record and responsible-owner approval |
| Commercial review | Approved configuration, MOQ, lead time, capacity discussion and second-source strategy | RFQ scope based on the frozen technical definition |

{% include conversion-sample.html source="mov-second-source-qualification" application="second-source" %}

## Why markings are not enough

Marking conventions may be shared across component families, but they do not establish matching test conditions, tolerances, construction, insulation, thermal protection, surge duty or application approval. Compare the actual supplier documents and test the actual assembly.

## Recommended benchmark plan

Use one fixture and one test protocol for existing and candidate parts. State operating voltage, waveform, source impedance, pulse count/interval, ambient condition, layout, measurement method and acceptance threshold. Do not compare unlike waveform or clamp test conditions as if they were equivalent.

<aside class="notice"><strong>Engineering limit.</strong> A successful bench result is permission to continue evaluation, not automatic production approval. Application-relevant safety, thermal, reliability and compliance decisions remain with the responsible organization.</aside>

## FAQ

### Can a 14D or 20D marking establish equivalence?

No. Package size is one physical attribute; it does not establish the full electrical or qualification definition.

### What comes before a sample request?

Provide the existing part/TDS, application, circuit location, continuous voltage, transient concern, required approvals and the first comparison result to validate.

### Can Owen help structure the comparison?

Yes. Send the existing MOV model or TDS and a short application description to discuss a practical comparison and sample plan.

## Related pages

- [Metal oxide varistor selection guide]({{ '/mov-selection-guide/' | relative_url }})
- [TMOV / thermally protected MOV]({{ '/tmov-thermally-protected-mov/' | relative_url }})
- [MOV for energy storage PCS]({{ '/applications/mov-for-energy-storage-pcs/' | relative_url }})

## Sources

- [TDK SIOV selection procedure](https://www.tdk-electronics.tdk.com/download/185710/705a180727925b6c726f5f6b76d6c1fb/siov-selection.pdf)
- [Littelfuse TMOV application note](https://www.littelfuse.com/~/media/electronics_technical/application_notes/varistors/littelfuse_designing_with_thermally_protected_tmov_varistors_in_spd_and_ac_line_application_note.pdf)

<script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Can a 14D or 20D marking establish equivalence?","acceptedAnswer":{"@type":"Answer","text":"No. Package size is one physical attribute; it does not establish the full electrical or qualification definition."}},{"@type":"Question","name":"What comes before a sample request?","acceptedAnswer":{"@type":"Answer","text":"Provide the existing part/TDS, application, circuit location, continuous voltage, transient concern, required approvals and the first comparison result to validate."}},{"@type":"Question","name":"Can Owen help structure the comparison?","acceptedAnswer":{"@type":"Answer","text":"Yes. Send the existing MOV model or TDS and a short application description to discuss a practical comparison and sample plan."}}]}</script>
