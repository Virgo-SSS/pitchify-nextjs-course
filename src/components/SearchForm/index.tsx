import React from "react";
import Form from "next/form";
import { Button } from "../ui/button";

export default function SearchForm({ search }: { search?: string }) {
  return (
    <>
      <Form
        id="search-form"
        action="/"
        scroll={false}
        className="flex items-center justify-center w-full max-w-md"
      >
        <input
          type="text"
          name="search"
          placeholder="Search for startups, investors, or jobs..."
          className="border border-black rounded-l-lg px-4 py-2 h-10"
          defaultValue={search}
        />

        <Button
          type="submit"
          className="rounded-r-lg px-4 h-10 hover:cursor-pointer"
        >
          Search
        </Button>
      </Form>
    </>
  );
}
