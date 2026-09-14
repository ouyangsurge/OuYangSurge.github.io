---
title: TMOV and Thermally Protected MOV Guide
description: Understand when thermally protected MOVs may be relevant, how they differ from a standalone MOV in the protection path, and what to validate.
permalink: /tmov-thermally-protected-mov/
---
## Answer first

A thermally protected MOV (often called TMOV) combines a varistor function with a thermal-disconnect function in a defined construction. It can be relevant where the protection path needs a controlled response to MOV overheating or end-of-life stress—but it is not a universal drop-in substitute for every standalone MOV. Verify the actual component’s datasheet, coordination, spacing, enclosure and system test plan.

## MOV versus TMOV

| Question | Standalone MOV path | Thermally protected MOV path |
| --- | --- | --- |
| Main function | Transient voltage limiting in the selected circuit | Transient voltage limiting plus a specified thermal-disconnect behavior |
| Design review | MOV duty, upstream protection, board/enclosure response | The same review plus disconnect behavior, indication if present and post-operation safety |
| Selection risk | Treating a pulse rating as lifetime proof | Treating the thermal feature as proof of complete SPD compliance |

## Where thermal protection can matter

In AC-line and SPD-related paths, sustained abnormal stress or degradation can create heating risk. A protected construction may be part of the mitigation strategy, together with upstream protection, creepage/clearance, enclosure, wiring and the applicable system requirements. Actual topology and compliance obligations depend on the finished product.

## What to validate

1. Confirm the continuous operating voltage and intended circuit location.
2. Align the transient waveform, surge level, clamp requirement and coordination with upstream/downstream parts.
3. Review the supplier’s stated thermal-disconnect behavior and construction limits.
4. Test representative hardware for electrical response, thermal behavior and the required post-event condition.
5. Treat application testing as mandatory before release or second-source approval.

<aside class="notice"><strong>Engineering limit.</strong> TMOV, TPMOV and TFMOV terminology is supplier-specific. Do not infer an identical internal structure, approval status or operating behavior from a similar name.</aside>

## FAQ

### Does TMOV replace an external fuse in every design?

No. Protection coordination is application-specific. Review the finished protection path and applicable requirements with the responsible design owner.

### Can a thermally protected MOV be qualified by datasheet only?

No. Datasheets screen candidates. Representative electrical, thermal and system-level tests are still needed.

### When should a second source be evaluated?

When the existing function, application conditions, test method and acceptance criteria can be frozen for a controlled comparison.

## Related pages

- [MOV selection guide]({{ '/mov-selection-guide/' | relative_url }})
- [MOV second-source qualification]({{ '/mov-second-source-qualification/' | relative_url }})
- [MOV for industrial power]({{ '/applications/mov-for-industrial-power/' | relative_url }})

## Sources

- [Littelfuse: designing with thermally protected TMOV varistors](https://www.littelfuse.com/~/media/electronics_technical/application_notes/varistors/littelfuse_designing_with_thermally_protected_tmov_varistors_in_spd_and_ac_line_application_note.pdf)
- [Littelfuse TMOV and iTMOV datasheet](https://www.littelfuse.com/assetdocs/tmov-itmov?assetguid=bd475732-1071-4352-b8aa-f78b0007eb05)

<script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does TMOV replace an external fuse in every design?","acceptedAnswer":{"@type":"Answer","text":"No. Protection coordination is application-specific and must be reviewed in the finished protection path."}},{"@type":"Question","name":"Can a thermally protected MOV be qualified by datasheet only?","acceptedAnswer":{"@type":"Answer","text":"No. Datasheets screen candidates; representative electrical, thermal and system-level tests remain needed."}},{"@type":"Question","name":"When should a second source be evaluated?","acceptedAnswer":{"@type":"Answer","text":"When the existing function, application conditions, test method and acceptance criteria can be frozen for a controlled comparison."}}]}</script>

