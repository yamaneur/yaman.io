import Section from "./Section";
import SectionHeader from "./SectionHeader";

const photos = [
  "1777922592102.jpeg",
  "1777922592772.jpeg",
  "7448388f-528b-4ac5-bd94-a4ac2e9a21ee.JPG",
  "DJI_20260420201943_0102_D.JPEG",
  "IMG_6983.JPG",
  "IMG_6987.JPG",
  "IMG_7081.JPG",
  "IMG_7082.JPG",
  "L31A4577.JPEG",
  "L31A4607.JPEG",
  "L31A4613.JPEG",
];

export default function Workshops() {
  return (
    <Section id="workshops" fullWidth ariaLabelledBy="workshops-heading">
      <SectionHeader
        id="workshops-heading"
        title="من الذاكرة"
        description="ورش عمل وإرشاد وممارسة مع المؤسسين في مراحل التأسيس المبكرة."
      />

      <div className="columns-2 sm:columns-3 gap-3 space-y-3">
        {photos.map((file) => (
          <div key={file} className="break-inside-avoid">
            <img
              src={`/images/workshops/${file}`}
              alt=""
              loading="lazy"
              className="w-full rounded-xl object-cover"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
