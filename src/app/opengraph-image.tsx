import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ibrahim Qureshi - Software Engineer & Data Analyst";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#0a192f",
          padding: "80px",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "#64ffda",
          }}
        />
        
        {/* Name intro */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              color: "#64ffda",
              fontSize: "24px",
              fontFamily: "monospace",
            }}
          >
            Hi, I&apos;m
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "#ccd6f6",
            margin: "0 0 16px 0",
            lineHeight: 1.1,
          }}
        >
          Ibrahim Qureshi
        </h1>

        {/* Tagline */}
        <h2
          style={{
            fontSize: "42px",
            fontWeight: "bold",
            color: "#8892b0",
            margin: "0 0 40px 0",
            lineHeight: 1.2,
          }}
        >
          Software Engineer & Data Analyst
        </h2>

        {/* Skills */}
        <div
          style={{
            display: "flex",
            gap: "16px",
          }}
        >
          {["Python", "SQL", "React", "TypeScript", "Data Viz"].map((skill) => (
            <span
              key={skill}
              style={{
                padding: "8px 16px",
                border: "1px solid #233554",
                borderRadius: "4px",
                color: "#64ffda",
                fontSize: "18px",
                fontFamily: "monospace",
              }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "80px",
            color: "#64ffda",
            fontSize: "20px",
            fontFamily: "monospace",
          }}
        >
          ibrahimqi.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

