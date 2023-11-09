import { AreaChart, Card, Title } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 23",
    "Better Designs": 3000,
    "Better Responsiveness": 2400,
    "Better SEO": 2800,
    "Mobile-first Indexing": 3200,
    "Unique Designs": 2700,
    "Customer-focused Products": 3100,
  },
  {
    date: "Feb 23",
    "Better Designs": 3200,
    "Better Responsiveness": 2500,
    "Better SEO": 2900,
    "Mobile-first Indexing": 3300,
    "Unique Designs": 2800,
    "Customer-focused Products": 3200,
  },
  {
    date: "Mar 23",
    "Better Designs": 3500,
    "Better Responsiveness": 2700,
    "Better SEO": 3200,
    "Mobile-first Indexing": 3600,
    "Unique Designs": 3000,
    "Customer-focused Products": 3400,
  },
  {
    date: "Apr 23",
    "Better Designs": 3700,
    "Better Responsiveness": 2900,
    "Better SEO": 3500,
    "Mobile-first Indexing": 3800,
    "Unique Designs": 3200,
    "Customer-focused Products": 3600,
  },
  {
    date: "May 23",
    "Better Designs": 3800,
    "Better Responsiveness": 3000,
    "Better SEO": 3700,
    "Mobile-first Indexing": 4000,
    "Unique Designs": 3400,
    "Customer-focused Products": 3800,
  },
  {
    date: "Jun 23",
    "Better Designs": 4000,
    "Better Responsiveness": 3200,
    "Better SEO": 3900,
    "Mobile-first Indexing": 4200,
    "Unique Designs": 3600,
    "Customer-focused Products": 4000,
  },
];

const valueFormatter = function (number: any) {
  return "$ " + new Intl.NumberFormat("us").format(number).toString();
};

export default function Graph() {
  return (
    <Card className="w-[90vw] md:w-full">
      <Title>Improvement Metrics over Time</Title>
      <AreaChart
        className="h-72 mt-4 bg-transparent "
        data={chartdata}
        index="date"
        categories={[
          "Better Designs",
          "Better Responsiveness",
          "Better SEO",
          "Mobile-first Indexing",
          "Unique Designs",
          "Customer-focused Products",
        ]}
        colors={["indigo", "cyan", "green", "purple", "orange", "teal"]}
        valueFormatter={valueFormatter}
      />
    </Card>
  );
}
