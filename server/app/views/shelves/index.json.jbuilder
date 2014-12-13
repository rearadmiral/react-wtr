json.array!(@shelves) do |shelf|
	json.extract! shelf, :id, :name, :exclusive
end
