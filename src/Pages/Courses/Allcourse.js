import React from "react";
import { useLoaderData } from "react-router-dom";
import Rightsidenav from "../Rightsidenav/Rightsidenav";
import CourseCard from "./CourseCard";

const Allcourse = () => {
  const Courses = useLoaderData();
  return (
    <div>
      <div
        style={{
          marginBottom: "300px",
          height: "100%",
          width: "100%",
          margin: "auto",
        }}
        className="bg-gray-200"
      >
        <div
          style={{ width: "80%", margin: "50px auto" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        >
          <div className=" col-span-2 ...">
            {Courses.map((course) => (
              <CourseCard key={course.id} course={course}></CourseCard>
            ))}
          </div>
          <div
            className="hidden lg:block"
            style={{ width: "80%", margin: "50px auto" }}
          >
            <Rightsidenav></Rightsidenav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allcourse;
