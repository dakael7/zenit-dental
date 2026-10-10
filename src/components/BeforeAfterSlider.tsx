"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { IMAGES } from "@/lib/config";

export default function BeforeAfterSlider() {
  const [value, setValue] = useState(50);
  const [unavailableImages, setUnavailableImages] = useState({ before: false, after: false });

  return null;
}