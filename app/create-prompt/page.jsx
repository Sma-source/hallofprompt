"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Form from "@components/Form";

const CreatePrompt = () => {
  const [submitting, setIsSubmitting] = useState(false); // check if we are submiting the form
  const [post, setPost] = useState({ prompt: "", tag: "" }); // object value that we are posting
  return <Form submitting={submitting} />;
};

export default CreatePrompt;
