import { Suspense, lazy } from "react";
import "./SplineScene.css";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function SplineScene({ scene, className = "" }) {
  return (
    <Suspense
      fallback={
        <div className={`spline-loader ${className}`}>
          <span className="spline-spinner"></span>
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
