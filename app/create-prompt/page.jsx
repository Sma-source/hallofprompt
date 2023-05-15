"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Form from "@components/Form";

const CreatePrompt = () => {
  const [submitting, setIsSubmitting] = useState(false);
  return <Form submitting={submitting} />;
};

export default CreatePrompt;
