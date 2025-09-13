

import { CreatePageSkeleton } from "@/components/create-page-skeleton";
import { NewProjectPage } from "@/components/new-project-page";
import { Suspense } from "react";

export default async function CreatePage() {
    

    return (
      <Suspense fallback={<CreatePageSkeleton  />}>
        <NewProjectPage />
      </Suspense>
    )
}