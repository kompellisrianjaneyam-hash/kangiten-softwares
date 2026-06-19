"use client";

export default function BlueprintGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      <div
        className="
        absolute
        inset-0
        opacity-20
        "
        style={{
          backgroundImage: `
            linear-gradient(#005A9C 1px, transparent 1px),
            linear-gradient(90deg,#005A9C 1px,transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

    </div>
  );
}